import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'formatTitle' })
export class FormatTitlePipe implements PipeTransform{
  transform(text: string){
    //clean strings and split to words
    let newText = text.replace(/[^\w\s]/gi, '').split(' ');
    let retText = "";
    let wrd = "";

    for(var i=0;i<newText.length;i++){
      for (var w = 0, len = newText[i].length; w < len; w++) {
          //first letter
          if(w==0){
              wrd = newText[i][w].toLocaleUpperCase();
          }
          else
          {
            wrd += newText[i][w].toLocaleLowerCase();
          }
      }
      retText += wrd + " ";
    }
    return retText;
  }
}
