// ~ Literal types allow you to specify a values that can only be one specific literal value.
// ~ this means that a variable with a literal type can only have one specific value.

let color: "red" | "blue" | "green"
color = "red"
// - color = "yellow" is invalid as it's not among the values we set.

let isTrue: true
isTrue = true
// - isTrue = false is invalid since we had specified value as true only.