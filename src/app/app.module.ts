import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { MatCardModule} from '@angular/material/card'
import { MatButtonModule} from '@angular/material/button'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { MatExpansionModule} from '@angular/material/expansion'


import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PostCreateComponenet} from './posts/posts-create/posts-create.component'
import { HeaderComponenet} from './header/header.componenet'
import { PostListComponent} from './posts/post-list/post-list.component'


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponenet,
    HeaderComponenet,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
