function withdraw(clients, balances, client, amount) {
  const problem = -1;
  let withdrawResult;
  for (let i = 0; i < clients.length; i++) {
    if (client == clients[i]) {
      if (balances[i] >= amount) {
        balances[i] -= amount;
        withdrawResult = balances[i];
      } else {
        return problem;
      }
    }
  }
  return withdrawResult;
}
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
