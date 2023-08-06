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