var form=document.querySelector('#addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit' , addItem)

itemList.addEventListener('click' , removeItem)

function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;

    var li=document.createElement('li')
    li.className='list-group-item';

    console.log(li);

    li.appendChild(document.createTextNode(newItem));

    var deleteBtn=document.createElement('button');
    var editBtn=document.createElement('button');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    editBtn.className='btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
