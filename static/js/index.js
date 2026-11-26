const methods = document.querySelectorAll("[data-method]");
const roster = [...document.querySelectorAll(".demo-roster input")];
const count = document.querySelector("#demo-count");
const note = document.querySelector("#demo-note");
const confirm = document.querySelector("#demo-confirm");

function updatePreview() {
  const selected = roster.filter((student) => student.checked).length;
  count.value = `${selected} of ${roster.length} selected`;
  confirm.disabled = selected === 0;
  note.textContent = "Sample roster. Nothing is saved.";
  return selected;
}

for (const method of methods) {
  method.addEventListener("click", () => {
    for (const button of methods) {
      button.setAttribute("aria-pressed", String(button === method));
    }
    const suggested = method.dataset.method === "photo" ? 2 : 1;
    roster.forEach((student, index) => { student.checked = index < suggested; });
    updatePreview();
  });
}

for (const student of roster) student.addEventListener("change", updatePreview);
confirm.addEventListener("click", () => {
  const selected = updatePreview();
  note.textContent = `Preview confirmed for ${selected} ${selected === 1 ? "student" : "students"}. Nothing was saved.`;
});

function openJourneyFromHash() {
  const section = document.getElementById(location.hash.slice(1));
  if (section instanceof HTMLDetailsElement) section.open = true;
}

window.addEventListener("hashchange", openJourneyFromHash);
for (const link of document.querySelectorAll("[data-open-journey]")) {
  link.addEventListener("click", () => {
    document.getElementById(link.hash.slice(1)).open = true;
  });
}
openJourneyFromHash();
