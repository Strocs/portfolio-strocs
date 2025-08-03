function cleanAndFormatColumnE() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  const range = sheet.getRange('E2:E' + sheet.getLastRow())
  const richValues = range.getRichTextValues()
  const richTexts = []

  for (let i = 0; i < richValues.length; i++) {
    const richCell = richValues[i][0]
    const rawText = richCell ? richCell.getText() : ''
    if (!rawText || typeof rawText !== 'string') {
      richTexts.push([SpreadsheetApp.newRichTextValue().setText('').build()])
      continue
    }

    // Step 1: Trim & remove wrapping quotes/symbols
    let text = rawText.trim()
    const wrapSymbols = [
      [`"`, `"`],
      [`“`, `”`],
      [`‘`, `’`],
      ['`', '`'],
      ["'", "'"],
    ]
    for (const pair of wrapSymbols) {
      // Only remove wrapping quotes if the entire string is wrapped (no line breaks between the quotes)
      const startsWith = text.startsWith(pair[0])
      const endsWith = text.endsWith(pair[1])
      const isSameOpen =
        pair[0] !== pair[1] &&
        text.startsWith(pair[0]) &&
        text.endsWith(pair[0])
      const isSameClose =
        pair[0] !== pair[1] &&
        text.startsWith(pair[1]) &&
        text.endsWith(pair[1])
      // Check for line breaks between the first and last character
      if ((startsWith && endsWith) || isSameOpen || isSameClose) {
        // Only remove if there are no line breaks between the quotes
        if (!text.slice(1, -1).includes('\n')) {
          text = text.slice(1, -1).trim()
          break
        }
      }
    }

    // Step 2: Replace multiple line breaks with one
    text = text.replace(/\n{3,}/g, '\n')

    // Step 3: Capitalize first valid letter
    text = text.replace(
      /^([^a-zA-ZñÑáéíóúÁÉÍÓÚ]*)([a-zA-ZñÑáéíóúÁÉÍÓÚ])/,
      (_, before, letter) => before + letter.toUpperCase()
    )

    // Preserve styles: always try to keep original styles if richCell exists
    if (richCell) {
      try {
        richTexts.push([richCell.copy().setText(text).build()])
      } catch (e) {
        // Fallback to plain text if style copy fails
        richTexts.push([
          SpreadsheetApp.newRichTextValue().setText(text).build(),
        ])
      }
    } else {
      richTexts.push([SpreadsheetApp.newRichTextValue().setText(text).build()])
    }
  }

  // Write result
  range.setRichTextValues(richTexts)
}
