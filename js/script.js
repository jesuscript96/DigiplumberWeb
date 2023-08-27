document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
      firstDay: 1,
    //   defaultDate: "today",
      locale: 'en',
      dateClick: function(info) {
        const datetimeInput = document.getElementById('datetime');
        datetimeInput.value = info.dateStr + 'T10:00'; // Set default time to 12:00 PM
        
    }
    });
    
    calendar.render();
  });



  
  