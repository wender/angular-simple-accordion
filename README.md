# Simple Accordion directive for [AngularJS](http://angularjs.org/)

***

Way simple Angular directive to turn any serial elements into an accordion, such as UL > LI

[DEMO](http://wender.github.io/angular-simple-accordion/)

## Attributes

|Attribute|Required|Default|Description|
|---------|:-------|:------|:----------|
|simple-accordion|true|N/A|Directive|
|item-selector|false|li|Used to tell what element the item is|
|title-selector|false|h2|Used to tell what element the title is|
|content-selector|false|p|Used to tell what element the content is|

## Example: 
```HTML
<ul class="accordion" simple-accordion>
                <li>
                    <h2>Title test one</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu tempor ante, eget ornare magna. Pellentesque cursus cursus erat sodales placerat. Fusce imperdiet auctor tortor at imperdiet. Integer feugiat, purus et pellentesque maximus, purus tortor dictum sem, et pellentesque turpis purus non massa. Donec et tellus nec enim luctus accumsan eget vel diam. Sed vel scelerisque mauris. Etiam porta augue vitae dolor pulvinar, eget faucibus diam posuere. Donec sit amet lobortis quam, at mattis ex. Ut vel suscipit arcu. Aliquam nec sem nec lorem dictum hendrerit. Duis rutrum sit amet magna quis fringilla. Praesent ut sem iaculis, semper turpis ultricies, porta massa. Curabitur id tellus vitae quam ornare tristique sit amet eget sapien. Phasellus imperdiet pretium pharetra. Vestibulum gravida sem id est sagittis placerat. Duis dolor sem, aliquet in velit quis, placerat commodo sapien.
                    </p>
                </li>
                <li>
                    <h2>Title test two</h2>
                    <p>
                        Nunc dignissim varius ipsum, eu ultrices justo euismod vitae. Donec condimentum tortor massa, ac hendrerit lacus convallis eu. Phasellus varius non sem consequat sagittis. Duis consectetur blandit mauris a hendrerit. Quisque ullamcorper dictum mi, in pharetra sem porta vel. Aenean consectetur erat felis, convallis dictum turpis venenatis in. Integer et porttitor lacus. Cras consectetur orci enim. Integer quis ornare elit, ac placerat est. Nam eget laoreet quam. Duis gravida hendrerit ipsum ut posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus suscipit sem tortor, nec pellentesque turpis auctor elementum. Pellentesque congue orci neque, eget egestas enim faucibus id.
                    </p>
                </li>
                <li>
                    <h2>Title test three</h2>
                    <p>
                        Sed laoreet nulla vel nisi auctor semper. Morbi vitae leo convallis, molestie arcu vitae, sodales sem. Curabitur consequat justo nisi. Integer iaculis felis vitae nulla cursus luctus. Ut ut ligula a lectus aliquet pellentesque. Nunc ut vulputate nunc, eu molestie turpis. Fusce urna massa, dapibus et enim quis, ullamcorper iaculis velit. Praesent accumsan ex id mi auctor, eget bibendum odio mollis. Nam ut nisi vulputate, feugiat sapien quis, sodales purus. Vivamus malesuada mauris non felis sagittis, vitae aliquam est commodo. Praesent porta euismod risus eget pulvinar. Aenean ut lobortis ipsum, at tincidunt ex. Suspendisse aliquam tellus nec risus porttitor molestie. Sed urna erat, hendrerit id eleifend et, eleifend sed ante. Ves
                    </p>
                </li>
            </ul>


	<style>
	.accordion {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .accordion .item .title {
        margin: 0;
        padding: 10px;
        background-color: #009688;
        border-bottom: 3px solid #CDDC39;
        color: #fff;
        font-weight: 100;
        position: relative;
        cursor: pointer;
    }
    
    .accordion .item .title:after {
        content: '\f078';
        font-family: 'FontAwesome';
        position: absolute;
        top: 10px;
        right: 10px;
        transition: all 0.5s ease;
    }
    
    .accordion .item.open .title:after {
        transform: rotate(180deg);
    }
    
    .accordion .item .content {
        padding: 0;
        margin: 0;
        background-color: #CDDC39;
        transition: all 0.5s ease;
        overflow: hidden;
    }
    
    .accordion .item.open .content {
        height: auto;
    }
    </style>

    <script type="text/javascript">
    var app = angular.module('myApp', ['simple-accordion']);
    app.controller('MainCtrl', function($scope) {

    });
    </script>
```

**IMPORTANT!**
 
*Without CSS you'll not achieve what you're expecting*

#### Install via bower

    bower install angular-simple-accordion --save