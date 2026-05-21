export const formatDate = (dateString) => {
  const date = new Date(dateString);
  
  const datePart = date.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' }); // 2026-05-20
  const timePart = date.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Dhaka',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }); 

  return `${datePart} ${timePart}`;
};