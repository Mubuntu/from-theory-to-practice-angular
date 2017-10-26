import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { Joke } from '../joke';
import { JokeComponent } from '../joke/joke.component';
@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit, AfterContentInit {
  jokes: Joke[];
  // storing a reference to the child JokeComponent in a property called jokeViewChild
  // jokeViewChild JokeComponent isn’t an instance of a joke class that exists inside this components view,
  // it is the actual instance of the child
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  // A @ViewChild decorator means, search inside this components template, it’s view, for this child
  // component.
  // not really useful seeing at it only retrieves the first child so with multiple instances we only get one
  // use ViewChildren decorator with QueryList to iterate over all the child views.
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  // One practical application of @ViewChild is to get access to template local variables in our component
  // class.
  // In the past we’ve said that template local variables are just that, local to the template.
  // But as the first param to the @ViewChild decorator we can also pass the name of a template local
  // variable and have Angular store a reference to that variable on our component
  @ViewChild("header") headerEl: ElementRef;
  // The concept of a content child is similar to that of a view child but the content children of the given
  // component are the child elements that are projected into the component from the host component.
  // In our example application we are projecting one joke in from the host AppComponent.
  // To get a reference to that child we can use either the @ContentChild or the @ContentChildren
  // decorators. They work in similar ways to the view child counterparts, @ContentChild returns one
  // child and @ContentChildren returns a QueryList.
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  constructor() {

  }

  addJoke(joke) {
    this.jokes.unshift(joke);
    // this.jokes.push(joke;
    // this.jokes.pop()
  }

  deleteJoke(joke) {
    let indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }
  deleteJokes() {
    this.jokes = [];
  }
  ngOnInit() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me?", "I thought ‘That’s not very mature’"),
    ];
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit - jokeViewCHild is ${this.jokeViewChild.data.setup} \n\t\t${this.jokeViewChild.data.punchline}`);
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    //noinspection TypeScriptUnresolvedVariable
    this.headerEl.nativeElement.textContent = "Best Joke Machine";

  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }
}
