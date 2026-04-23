const fs = require('fs');
const pdfParse = require('pdf-parse');

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const filePath = req.file.path;

    // Read file
    const dataBuffer = fs.readFileSync(filePath);

    // Extract text from PDF
    const data = await pdfParse(dataBuffer);

    const extractedText = data.text;

    return res.status(200).json({
      message: "Resume processed",
      filename: req.file.filename,
      text: extractedText,
    });

  } catch (error) {
  console.error("FULL ERROR:", error);

  return res.status(500).json({
    message: "Error processing resume",
    error: error.message
  });
}
};