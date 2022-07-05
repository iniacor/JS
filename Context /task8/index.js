// объект содержит кол-во пройденных минут, поля объекта увеличиваюстя на
// 1 каждую секунду
// поочередно реализуем методы
// test data
// refactoring

export const timer = {
  secondsPassed: 0, // когда достигает 60 то minsPassed +1.А secondsPassed снова 0.
  minsPassed: 0,
  startTimer() {
    // запускает таймер кот-ый увеличивает значение this.secondsPassed
    // каждую секунду на 1
    // для запуска юзаем метод setInterval
    if (this.secondsPassed === 60) {
      this.minsPassed += 1;
      this.secondsPassed += 1;
    }
  },
  myInterval: setInterval(() => timer.startTimer(), 1000),

  getTime() {
    // возвращаем текущее состояние таймера в формате стринга '1:45'
    // где 1-minsPassed, 45- secondsPassed(Двухзначное!);
    // дополнить лидирующим нулем при необходимости
    return `${this.minsPassed}:${this.secondsPassed
      .toString()
      .padStart(2, '0')}`;
  },
  stopTimer() {
    // останавливет таймер и сохраняет текущее состояние
    // Если возобновить, продолжем с сохраненной позиции
  },
  clearInterval() {
    // останавливает таймер.Принимает идентификатор интервала(результат работы
    // setInterval)
    clearInterval.bind(this.myInterval);
  },
  resetTimer() {
    // сбрасывает таймер в изначальное состояние до старта
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};
// console.log(timer.getTime());
console.log(timer.startTimer());
