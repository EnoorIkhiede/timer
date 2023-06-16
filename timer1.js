const args = process.argv.slice(2);

const setAlarms = (alarms) => {
  for (let alarm of alarms) {
    const time = Number(alarm);
    if (!isNaN(time) && time > 0) {
      setTimeout(() => {
        process.stdout.write('\x07'); // Beep
        console.log(`Beep! ${time} seconds`);
      }, time * 1000);
    }
  }
};

setAlarms(args);
