function markdownToDocs() {
  const body = DocumentApp.getActiveDocument().getBody();

  // Use editAsText to obtain a single text element containing
  // all the characters in the document.
  const text = body.editAsText();

  var boldStyle = {};
  boldStyle[DocumentApp.Attribute.BOLD] = true;
  replaceDeliminators(body, "\\*\\*", boldStyle, false);
  
  var blockHighlightStyle = {};
  blockHighlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = "#EEEEEE";
  replaceDeliminators(body, "```", blockHighlightStyle, true);
  
  var inlineStyle = {};
  inlineStyle[DocumentApp.Attribute.FONT_FAMILY] = "Times New Roman";
  inlineStyle[DocumentApp.Attribute.ITALIC] = true;
  replaceDeliminators(body, "`", inlineStyle, false);
  
  handleSubscript(body);
}

function handleSubscript(body){
  var content = body.getText();
  const text = body.editAsText();
  const regex = new RegExp("\\b[a-zA-Z]+_([a-zA-Z0-9]+)\\b", "g");
  var match = "";
  var attributes = {};
  attributes[DocumentApp.Attribute.FONT_SIZE] = 8;
  while (true){
    match = regex.exec(content);
    if (match === null){
        break; 
    }
    var start = match.index + match[0].length - match[1].length;
    var end = match.index + match[0].length - 1;
    text.setAttributes(start, end, attributes);
//    text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
  }
  text.replaceText("_", "");
}

function replaceDeliminators(body, deliminator, attributes, multiline){
  var capture;
  if (multiline){
    capture = "([\\s\\S]+?)";
  } else{
    capture = "(.+?)";
  }
  const regex = new RegExp(deliminator + capture + deliminator, "g");
  const replacer = function(match, regex){
    return match[1];
  }
  replaceText(body, regex, replacer, attributes); 
}

function replaceText(body, regex, replacer, attributes){
  var content = body.getText();
  const text = body.editAsText();
  var match = "";
  while (true){
    content = body.getText();
    var oldLength = content.length;
    match = regex.exec(content);
    if (match === null){
        break;
    }
    var start = match.index;
    var end = regex.lastIndex - 1;
    text.deleteText(start, end);
    text.insertText(start, replacer(match, regex));
    var newLength = body.getText().length;
    var replacedLength = oldLength - newLength;
    var newEnd = end - replacedLength;
    text.setAttributes(start, newEnd, attributes);
    regex.lastIndex -= replacedLength;
  }
}