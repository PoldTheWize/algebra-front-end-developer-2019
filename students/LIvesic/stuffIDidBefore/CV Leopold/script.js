$(document).ready (function(){
	$('.submit').click(function(){
		
		let email = $('.email').val()
		let subject = $('.subject').val()
		let message = $('.message').val()
		let statusElm = $('.status')
		
		if(email.length > 5 && email.includes('@') && email.includes('.')){
			
		}else{
			statusElm.append('<div>Invalid email</div>')
			event.preventDefault()
		}
		
		if(subject.length >= 2){
			
		}else{
			statusElm.append('<div>Subject name to short</div>')
			event.preventDefault()
		}
		
		if(message.length >=10){
			
		}else{
			statusElm.append('<div>Message to short</div>')
			event.preventDefault()
		}
	})
})