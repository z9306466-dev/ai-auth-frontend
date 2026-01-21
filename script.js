async function analyze(type) {
  const file = document.getElementById("file").files[0];
  const data = new FormData();
  data.append("file", file);

  const res = await fetch("https://ai-authenticity.onrender.com/analyze", {
  method: "POST",
  body: formData
})

  const API_URL = "https://ai-authenticity.up.railway.app"; 
   
}
