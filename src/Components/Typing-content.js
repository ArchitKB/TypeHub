var Content = [
  "the sky is blue the grass is green there are birds in the trees flowers bloom in the meadow a river flows quietly in the distance the sun sets behind the hills casting a warm glow the world is vast and full of wonders nature is a beautiful symphony of life and cycles each moment holds a unique beauty and charm it's a tapestry of existence where everything is interconnected and harmonious there's a simplicity in the rhythm of life that captivates the soul and invites contemplation a serene dance of elements unfolding in an eternal ballet",
  "in a galaxy far away there are stars and planets jedi and sith engage in epic battles the force is strong with them lightsabers clash in intense duels spaceships soar through the cosmos the death star looms threateningly rebellion fights against the empire droids beep and whirr stormtroopers march in formation the millennium falcon navigates through asteroid fields yoda imparts wisdom with a cryptic tone the dark side tempts with its power characters like luke and leia become legends the saga unfolds across trilogies creating a vast universe of imagination where the force binds everything together in an endless cosmic saga",
  "sorem sipsum",
  "the year is twenty thirty in a parallel dimension where MNNIT is rumored to be a secret training ground for intergalactic ducks yes ducks with advanced engineering degrees students are said to communicate with these feathered scholars through quacks during lectures the campus is believed to have a hidden portal to a duck-dominated universe where they exchange knowledge on quantum quacking and warp-speed waddling the college cafeteria is allegedly a front for a duck-run bakery specializing in extraterrestrial pastries conspiracy theorists claim that the dean is actually a highly intelligent duck in disguise leading a covert mission for interspecies enlightenment",
];

var parcedCont = [];
for (var i = 0; i < Content.length; i++) {
  parcedCont.push(Content[i].split(" "));
}

export default Content;
export { parcedCont };
