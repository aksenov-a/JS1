function  addMenuPosition1() {
  let RowVar = document.querySelector('.RowVar');
  let BestBurgers = document.createElement('div');
  let Thumb = document.createElement('div');
  let Info = document.createElement('div');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  let span = document.createElement('span');
    let img = document.createElement('img');
  BestBurgers.className = 'BestBurgers';
  Thumb.className = 'Thumb';
  Info.className = 'Info';
  h3.id = 'NF';
  p.id = 'DF';
  span.id = 'PF';
  img.id = 'IF';
  RowVar.append(BestBurgers);
  BestBurgers.append(Thumb);
    Thumb.append(img);
  BestBurgers.append(Info);
  Info.append(h3);
  Info.append(p);
  Info.append(span);
  document.getElementById('IF').src =  ImgFood.value;
  document.getElementById('NF').innerHTML = NameFood.value;
  document.getElementById('DF').innerHTML  = DescriptionFood.value;
  document.getElementById('PF').innerHTML  = PriceFood.value;
  ImgFood.value = "";
  DescriptionFood.value = "";
  PriceFood.value = "$";
  NameFood.value = "";
 return;
}

function  removeMenuPosition() {
  document.querySelector('.BestBurgers').outerHTML = "";
}
