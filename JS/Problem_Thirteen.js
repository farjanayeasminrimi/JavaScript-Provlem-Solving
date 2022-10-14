/* 
   You are in a hurry to go to your school on time. But when you are crossing    the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.
   If you notice a yellow coloured traffic signal, you should stop.
   If you notice a green coloured traffic signal, you should cross the road.
   So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable.
*/

let signal = 'red';
switch (signal) {
  case 'yellow':
    console.log('I need to stop');
    break;
  case 'green':
    console.log('I need to go');
    break;
  case 'red':
    console.log('If I walk now I will be in danger');
    break;
  default:
    console.log('apon mone hato go ...... apon mone hatooooo');
}

