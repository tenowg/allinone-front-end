import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CharService } from '../char.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aio-common-eve-char-image',
  templateUrl: './eve-char-image.component.html',
  styleUrls: ['./eve-char-image.component.css']
})
export class EveCharImageComponent implements OnInit, OnChanges, OnDestroy {
  @Input() size: number;
  @Input() character_id: number;
  @Input() show_name = true;
  @Input() max_height;
  char;
  call$: Subscription;

  constructor(private char_service: CharService) { }

  ngOnInit() {
    this.call$ = this.char_service.getCharacter(this.character_id).subscribe((val: any) => this.char = val);
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.call$.unsubscribe();
    this.call$ = this.char_service.getCharacter(this.character_id).subscribe((val: any) => this.char = val);
  }

  ngOnDestroy() {
    // this.call$.unsubscribe();
  }
}
