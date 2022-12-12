/*
CONDITIONS

Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
    - If the value is the same they both perish
    - If one of the values is empty(different array lengths) the non-empty value soldier survives.
    - To survive the defending side must have more survivors than the attacking side.
    - In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
    - The initial attack power is the sum of all the values in each array.
    
EXAMPLES

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
//0 survivors                4 survivors
//return true


attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
//1 survivors                3 survivors 
//return true
*/

function fight(attackSoldier = 0, defenderSoldier = 0): number {
	return attackSoldier - defenderSoldier;
}

function getPower(array: number[]) {
	const result = array.reduce((acc: number, el: number) => acc + el, 0);
	return result;
}

function getDefenseSurvivors(array: number[]) {
	return array.filter((e) => e > 0);
}

export const hasSurvived = (
	attackers: number[],
	defenders: number[]
): boolean => {
	const largestArmy =
		attackers.length >= defenders.length ? attackers : defenders;

	let carnage: number[] = [];
	for (let i = 0; i < largestArmy.length; i++) {
		carnage.push(fight(defenders[i], attackers[i]));
	}
	let defenseSurvivors = getDefenseSurvivors(carnage);

	let balance = defenseSurvivors.length / carnage.length;

	return balance == 0.5
		? getPower(attackers) <= getPower(defenders)
		: balance > 0.5;
};
