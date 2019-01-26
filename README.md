# ExpressDocs
ExpressDocs is a customized Markdown and Mathematic equation renderer in Google Docs partially based on [Auto-LaTeX Equations](https://chrome.google.com/webstore/detail/auto-latex-equations/iaainhiejkciadlhlodaajgbffkebdog?hl=en-US). Currently, ExpressDocs support:
1. custom deliminaters for custom markdown styles
2. Rendering of LaTeX/AsciiMath expressions as high quality image
4. GUI interface on the way...

## Set up
1. Copy the Google Apps Script `Code.js`
2. Open a Google Docs document
3. Click on `Tools` -> `Script Editor`
4. In the Script Editor, click on `File` -> `New` -> select `Script File`
5. Name the file `expressDocs` (no file type like `.js`)
6. On the menu bar of the script editor, click on `Select Function` dropdow and select `markdownToDocs`
7. Click on the triangular run button to execute the script

## Usage
### Markdown
The default syntax of ExpressDocs is very similar to Markdown:
1. Surround inline text with `**` to bold: \*\***I am bold**\*\*
2. Surround inline text with `` ` `` to italic: \`*I am Italic*\`
3. Surround inline/multiline text with ```` ``` ```` to highlight in gray: 
\`\`\`I am highlighted in gray.
Multiple lines are highlighted in gray as well.\`\`\`

### Render LaTeX/AsciiMath expressions:
Surround LaTeX/AsciiMath expressions in `$$` to render them as high quality image. You don't need to specify the format, ExpressDocs will automatically analyze the format.

**Example 1: Rendering LaTeX**
```
$$
F(x,y)=0 ~~\mbox{and}~~
\left| \begin{array}{ccc}
  F''_{xx} & F''_{xy} &  F'_x \\
  F''_{yx} & F''_{yy} &  F'_y \\
  F'_x     & F'_y     & 0 
  \end{array}\right| = 0
$$
```
will be rendered as
![](http://www.texrendr.com/cgi-bin/mathtex.cgi?\dpi{340}F(x%2Cy)%3D0%20~~%5Cmbox%7Band%7D~~%0A%5Cleft%7C%20%5Cbegin%7Barray%7D%7Bccc%7D%0A%20%20F%27%27_%7Bxx%7D%20%26%20F%27%27_%7Bxy%7D%20%26%20%20F%27_x%20%5C%5C%0A%20%20F%27%27_%7Byx%7D%20%26%20F%27%27_%7Byy%7D%20%26%20%20F%27_y%20%5C%5C%0A%20%20F%27_x%20%20%20%20%20%26%20F%27_y%20%20%20%20%20%26%200%20%0A%20%20%5Cend%7Barray%7D%5Cright%7C%20%3D%200)

**Example 2: Rendering AsciiMath**
```
$$ 1/(1+1/(2+1/(3+x)) + 1/(1+1/(2+1/(3+x))) $$
```
will be rendered as
![](http://www.texrendr.com/cgi-bin/mathtex.cgi?\dpi{340}%5Cfrac%7B%7B1%7D%7D%7B%7B%7B1%7D%2B%5Cfrac%7B%7B1%7D%7D%7B%7B%7B2%7D%2B%5Cfrac%7B%7B1%7D%7D%7B%7B%7B3%7D%2B%7Bx%7D%7D%7D%7D%7D%2B%5Cfrac%7B%7B1%7D%7D%7B%7B%7B1%7D%2B%5Cfrac%7B%7B1%7D%7D%7B%7B%7B2%7D%2B%5Cfrac%7B%7B1%7D%7D%7B%7B%7B3%7D%2B%7Bx%7D%7D%7D%7D%7D%7D%7D%7D%7D)

All rendered images will be scaled down to fill in the document without losing clarity.

## License
This project is licensed under the terms of the MIT license.
