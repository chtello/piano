const synth = new Tone.Synth().toDestination();
const now = Tone.now();
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
