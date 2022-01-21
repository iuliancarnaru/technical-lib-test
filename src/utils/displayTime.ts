export const displayTime = (time: number): string => {
  const minutes = Math.floor((time % 3600) / 60);
  let seconds: number | string = Math.floor((time % 3600) % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;

  return `${minutes}:${seconds}`;
};
