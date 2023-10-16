console.log('dom.js file added');
document.getElementById('btn-background').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    console.log(friends);
    for(const friend of friends ){
        friend.style.backgroundColor = 'lightblue'
    }
});

document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
});

document.getElementById('new-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML =`
    <h3 class="friend-name"> New friend</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    `
    friendContainer.appendChild(friend);
})