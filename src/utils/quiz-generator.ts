export function getPrompt(content: string, language: string) {
	return `You are an expert quiz creator. Generate a short multiple-choice quiz (around 5 questions) based on the following content. The quiz should be in ${language}.

  Content:
  ---
  ${content}
  ---
  
  Instructions:
  - Generate a quiz title and a list of multiple-choice questions.
  - Each question must have a question text, an array of options, and the correct answer string (matching one of the options exactly).
  - Focus ONLY on the provided text content. Ignore images, charts, or complex formatting.
  - Ensure the questions and options are in ${language}.
  - Respond ONLY with the JSON object matching the provided schema. Do not include any introductory text, explanations, or markdown formatting outside the JSON structure.
  
  Language: ${language}
  Desired JSON Output:`;
}
