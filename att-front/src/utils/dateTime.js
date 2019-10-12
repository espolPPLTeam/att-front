/** Milliseconds in a second */
const msInSecond = 1000;
/** Milliseconds in a minute */
const msInMinute = msInSecond * 60;
/** Millisedonds in an hour */
const msInHour = msInMinute * 60;
/** Milliseconds in a day */
const msInDay = msInHour * 24;

/**
 * Returns the time passed since the date
 * @description
 * If time is less than a minute it returns time in seconds
 * If time is less than an hour it returns the time in minutes
 * If time is less than a day it returns the time in hours
 * Else, it returns the time in days
 */
const timeFromDate = date => {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  if (diff <= msInMinute) {
    return 'Hace unos segundos.';
  } else if (diff > msInMinute && diff < (2 * msInMinute)) {
    return 'Hace un minuto.';
  } else if (diff <= msInHour) {
    const minutes = Math.floor(diff/msInMinute);
    return `Hace ${minutes} minutos.`;
  } else if (diff > msInHour && diff < (2 * msInHour)) {
    return 'Hace una hora.';
  } else if (diff <= msInDay) {
    const hours = Math.floor(diff/msInHour);
    return `Hace ${hours} horas.`;
  } else if (diff > msInDay && diff < (2 * msInDay)) {
    return 'Hace un día.';
  } else {
    const days = Math.floor(diff/msInDay);
    return `Hace ${days} días.`;
  }
}

export default {
  timeFromDate,
};
