document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const theatreId = "https://evening-plateau-54365.herokuapp.com/theatres/1"
    
    const newTicketId = "https://evening-plateau-54365.herokuapp.com/tickets"
    
    fetch(theatreId)
    .then(resp => resp.json())
    .then(data => {
        console.log(data) 
        showings.forEach(showing => {
        document.getElementsByClassName("ui cards showings").innerHTML += `<div class="card">
        <div class="content">
          <div class="header">
            (Film Title)
          </div>
          <div class="meta">
            (Runtime) minutes
          </div>
          <div class="description">
            (Num Tickets) remaining tickets
          </div>
          <span class="ui label">
            (Showtime)
          </span>
        </div>
        <div class="extra content">
          <div class="ui blue button">Buy Ticket</div>
        </div>
      </div>`
           
        })
    })
            

    fetch(newTicketId, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        body: JSON.stringify ({
            showing_id: showingId
          })

    }) 
  
    





















});