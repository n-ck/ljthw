const area = (r) => Math.PI * Math.pow(r, 2);

const circumference = (r) => 2 * Math.PI * r;

const diameter = (r) => 2 * r;

module.exports = {
	area: area,
	circumference: circumference,
	diameter: diameter
}