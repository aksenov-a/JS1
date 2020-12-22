 let clicks = 0;
function  addMenuPosition1() {
  const RowVar = document.querySelector('.RowVar');
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
  h3.className = 'NF';
  p.className = 'DF';
  span.className = 'PF';
  img.className = 'IF';
  RowVar.append(BestBurgers);
  BestBurgers.append(Thumb);
    Thumb.append(img);
  BestBurgers.append(Info);
  Info.append(h3);
  Info.append(p);
  Info.append(span);
  document.getElementsByClassName("IF")[clicks].src = ImgFood;
  document.getElementsByClassName("NF")[clicks].textContent = NameFood.value;
  document.getElementsByClassName("DF")[clicks].textContent = DescriptionFood.value;
  document.getElementsByClassName("PF")[clicks].textContent = PriceFood.value;
  clicks += 1;
    document.getElementById("AddMenu").reset();
}
function  removeMenuPosition() {
  clicks = 0;
  let parent = document.querySelectorAll('.BestBurgers');
  for( let i = 0; i < parent.length; i++ ){
  parent[i].outerHTML = "";
  }
}
