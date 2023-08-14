const synth = new Tone.Synth().toDestination();
const now = Tone.now();
//Teclas negras
const DoN = document.getElementById("neg1");
DoN.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("C4#",now);
});
const ReN = document.getElementById("neg2");
ReN.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("D4#",now);
});
const FaN = document.getElementById("neg3");
FaN.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("F4#",now);
});
const SolN = document.getElementById("neg4");
SolN.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("G4#",now);
});
const LaN = document.getElementById("neg5");
LaN.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("A4#",now);
});
const DoN2 = document.getElementById("neg6");
DoN2.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("C4#",now);
});
//Teclas blancas
const DoB = document.getElementById("bl1");
DoB.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("C4",now);
});
const ReB = document.getElementById("bl2");
ReB.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("D4",now);
});
const MiB = document.getElementById("bl3");
MiB.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("E4",now);
});
const FaB = document.getElementById("bl4");
FaB.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("F4",now);
});
const SolB = document.getElementById("bl5");
SolB.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("G4",now);
});
const LaB = document.getElementById("bl6");
LaB.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("A4",now);
});
const SiB = document.getElementById("bl7");
SiB.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("B4",now);
});
const Do2B = document.getElementById("bl8");
Do2B.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("C4",now);
});
// Notas Mayores
const DoM = document.getElementById("DoMa");
DoM.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("C5", "8n", now);
    synth.triggerAttackRelease("D5", "8n", now + 0.5);
    synth.triggerAttackRelease("E5", "8n", now + 1);
    synth.triggerAttackRelease("F5", "8n", now + 1.5);
    synth.triggerAttackRelease("G5", "8n", now + 2);
    synth.triggerAttackRelease("A5", "8n", now + 2.5);
    synth.triggerAttackRelease("B5", "8n", now + 3);
    synth.triggerAttackRelease("C5", "8n", now + 3.5); 
});
const ReM = document.getElementById("ReMa");
ReM.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("D5", "8n", now);
    synth.triggerAttackRelease("E5", "8n", now + 0.5);
    synth.triggerAttackRelease("F#5", "8n", now + 1);
    synth.triggerAttackRelease("G5", "8n", now + 1.5);
    synth.triggerAttackRelease("A5", "8n", now + 2);
    synth.triggerAttackRelease("B5", "8n", now + 2.5);
    synth.triggerAttackRelease("C#5", "8n", now + 3);
    synth.triggerAttackRelease("D5", "8n", now + 3.5);
});
const MiM = document.getElementById("MiMa");
MiM.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("E5", "8n", now);
    synth.triggerAttackRelease("F#5", "8n", now + 0.5);
    synth.triggerAttackRelease("G#5", "8n", now + 1);
    synth.triggerAttackRelease("A5", "8n", now + 1.5);
    synth.triggerAttackRelease("B5", "8n", now + 2);
    synth.triggerAttackRelease("C#5", "8n", now + 2.5);
    synth.triggerAttackRelease("D#5", "8n", now + 3);
    synth.triggerAttackRelease("E5", "8n", now + 3.5);
});
const FaM = document.getElementById("FaMa");
FaM.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("F5", "8n", now);
    synth.triggerAttackRelease("G5", "8n", now + 0.5);
    synth.triggerAttackRelease("A5", "8n", now + 1);
    synth.triggerAttackRelease("A#5", "8n", now + 1.5);
    synth.triggerAttackRelease("C5", "8n", now + 2);
    synth.triggerAttackRelease("D5", "8n", now + 2.5);
    synth.triggerAttackRelease("E5", "8n", now + 3);
    synth.triggerAttackRelease("F5", "8n", now + 3.5);
});
const SolM = document.getElementById("SolMa");
SolM.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("G5", "8n", now);
    synth.triggerAttackRelease("A5", "8n", now + 0.5);
    synth.triggerAttackRelease("B5", "8n", now + 1);
    synth.triggerAttackRelease("C5", "8n", now + 1.5);
    synth.triggerAttackRelease("D5", "8n", now + 2);
    synth.triggerAttackRelease("E5", "8n", now + 2.5);
    synth.triggerAttackRelease("F#5", "8n", now + 3);
    synth.triggerAttackRelease("G5", "8n", now + 3.5);
});
const LaM = document.getElementById("LaMa");
LaM.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("A5", "8n", now);
    synth.triggerAttackRelease("B5", "8n", now + 0.5);
    synth.triggerAttackRelease("C#5", "8n", now + 1);
    synth.triggerAttackRelease("D5", "8n", now + 1.5);
    synth.triggerAttackRelease("E5", "8n", now + 2);
    synth.triggerAttackRelease("F#5", "8n", now + 2.5);
    synth.triggerAttackRelease("G#5", "8n", now + 3);
    synth.triggerAttackRelease("A5", "8n", now + 3.5);
});
const SiM = document.getElementById("SiMa");
SiM.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("B5", "8n", now);
    synth.triggerAttackRelease("C#5", "8n", now + 0.5);
    synth.triggerAttackRelease("D#5", "8n", now + 1);
    synth.triggerAttackRelease("E5", "8n", now + 1.5);
    synth.triggerAttackRelease("F#5", "8n", now + 2);
    synth.triggerAttackRelease("G#5", "8n", now + 2.5);
    synth.triggerAttackRelease("A#5", "8n", now + 3);
    synth.triggerAttackRelease("B5", "8n", now + 3.5); 
});
// Notas Menores
const DoMe = document.getElementById("DoMen");
DoMe.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("C3", "8n", now);
    synth.triggerAttackRelease("D3", "8n", now + 0.5);
    synth.triggerAttackRelease("D#3", "8n", now + 1);
    synth.triggerAttackRelease("F3", "8n", now + 1.5);
    synth.triggerAttackRelease("G3", "8n", now + 2);
    synth.triggerAttackRelease("G#3", "8n", now + 2.5);
    synth.triggerAttackRelease("A#3", "8n", now + 3);
    synth.triggerAttackRelease("C3", "8n", now + 3.5); 
});
const ReMe = document.getElementById("ReMen");
ReMe.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("D3", "8n", now);
    synth.triggerAttackRelease("E3", "8n", now + 0.5);
    synth.triggerAttackRelease("F3", "8n", now + 1);
    synth.triggerAttackRelease("G3", "8n", now + 1.5);
    synth.triggerAttackRelease("A3", "8n", now + 2);
    synth.triggerAttackRelease("A#3", "8n", now + 2.5);
    synth.triggerAttackRelease("C3", "8n", now + 3);
    synth.triggerAttackRelease("D3", "8n", now + 3.5);
});
const MiMe = document.getElementById("MiMen");
MiMe.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("E3", "8n", now);
    synth.triggerAttackRelease("F#3", "8n", now + 0.5);
    synth.triggerAttackRelease("G3", "8n", now + 1);
    synth.triggerAttackRelease("A3", "8n", now + 1.5);
    synth.triggerAttackRelease("B3", "8n", now + 2);
    synth.triggerAttackRelease("C3", "8n", now + 2.5);
    synth.triggerAttackRelease("D3", "8n", now + 3);
    synth.triggerAttackRelease("E3", "8n", now + 3.5);
});
const FaMe = document.getElementById("FaMen");
FaMe.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("F3", "8n", now);
    synth.triggerAttackRelease("G3", "8n", now + 0.5);
    synth.triggerAttackRelease("G#3", "8n", now + 1);
    synth.triggerAttackRelease("A#3", "8n", now + 1.5);
    synth.triggerAttackRelease("C3", "8n", now + 2);
    synth.triggerAttackRelease("C#3", "8n", now + 2.5);
    synth.triggerAttackRelease("D#3", "8n", now + 3);
    synth.triggerAttackRelease("F3", "8n", now + 3.5);
});
const SolMe = document.getElementById("SolMen");
SolMe.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("G3", "8n", now);
    synth.triggerAttackRelease("A3", "8n", now + 0.5);
    synth.triggerAttackRelease("A#3", "8n", now + 1);
    synth.triggerAttackRelease("C3", "8n", now + 1.5);
    synth.triggerAttackRelease("D3", "8n", now + 2);
    synth.triggerAttackRelease("D#3", "8n", now + 2.5);
    synth.triggerAttackRelease("F3", "8n", now + 3);
    synth.triggerAttackRelease("G3", "8n", now + 3.5);
});
const LaMe = document.getElementById("LaMen");
LaMe.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("A3", "8n", now);
    synth.triggerAttackRelease("B3", "8n", now + 0.5);
    synth.triggerAttackRelease("C3", "8n", now + 1);
    synth.triggerAttackRelease("D3", "8n", now + 1.5);
    synth.triggerAttackRelease("E3", "8n", now + 2);
    synth.triggerAttackRelease("F3", "8n", now + 2.5);
    synth.triggerAttackRelease("G3", "8n", now + 3);
    synth.triggerAttackRelease("A3", "8n", now + 3.5);
});
const SiMe = document.getElementById("SiMen");
SiMe.addEventListener("click", async () => {
	await Tone.start();
    synth.triggerAttackRelease("B3", "8n", now);
    synth.triggerAttackRelease("C#3", "8n", now + 0.5);
    synth.triggerAttackRelease("D3", "8n", now + 1);
    synth.triggerAttackRelease("E3", "8n", now + 1.5);
    synth.triggerAttackRelease("F#3", "8n", now + 2);
    synth.triggerAttackRelease("G3", "8n", now + 2.5);
    synth.triggerAttackRelease("A3", "8n", now + 3);
    synth.triggerAttackRelease("B3", "8n", now + 3.5); 
});