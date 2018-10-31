/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test to ensure that a URL is defined and not empty.
         */
        it('URL is defined', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* Test to ensure that a name is defined and not empty.
         */
        it('name is defined', function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });
    //The Menu test suite
    describe('The Menu', function(){
        /* Test to ensure the menu element is hidden by default.
         */
        it('is hidden by default', function(){
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
        
         /* Test to ensure the menu changes visibility when the menu icon is clicked.
          */
        it('changes visibility on menu icon click', function(){
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });
    //Initial Entries test suite
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0,done);
        });
    /* Test to ensure that there is at least a single entry (`.entry` element) within the `.feed` container initially.
        */
        it('contains at least a single entry', function(){
            const entryObject = document.querySelector('.feed .entry');
            expect(entryObject).not.toBe(null);
        });

    });
    //New Feed Selection test suite
    describe('New Feed Selection', function(){
        const container = document.querySelector('.feed');
        let containerContent;
        beforeEach(function(done){
            loadFeed(0,function(){
                containerContent = container.innerHTML;
                loadFeed(1, done);
            });
        });
    /* Test to ensure when a new feed is loaded than the content actually changes.
        */
        it('to check if the content changes', function(){
            expect(container.innerHTML === containerContent).toBe(false);
        });
    });
}());
