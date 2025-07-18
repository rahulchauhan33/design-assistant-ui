async function sendPrompt(text) {
  document.getElementById("userInput").value = text;
  askAgent();
}

async function askAgent() {
  const userInput = document.getElementById("userInput").value;
  document.getElementById("responseBox").innerText = "Thinking...";

  const response = await fetch("https://huggingface.co/spaces/rcrahulkumar/design-executive-agent-hf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [userInput] }),
  });

  const result = await response.json();
  document.getElementById("responseBox").innerText = result.data[0];
}
