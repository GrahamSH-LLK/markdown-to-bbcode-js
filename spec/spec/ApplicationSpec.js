describe("Converter", function() {
  beforeEach(function() {
    converter = new Converter();
  });

  // describe("#url", function() {
  //   it("converters markdown url to bbcode url", function() {
  //     expect(converter.url("[Data](A)")).toEqual('[URL="A"]Data[/URL]');
  //   });
  // 
  //   it("converters markdown urls to bbcode urls", function() {
  //     expect(converter.url("[Data1](A)[Data2](B)")).toEqual('[URL="A"]Data1[/URL][URL="B"]Data2[/URL]');
  //   });
  // });
  // 
  // describe("#code", function() {
  //   it("converters markdown code `Code` to a BBCode tag", function() {
  //     expect(converter.code("`Code!`")).toEqual('[CODE]\nCode!\n[/CODE]');
  //   });
  // 
  //   it("converters markdown code ``` to a BBCode tag", function() {
  //     expect(converter.code("```\nCode!\n```")).toEqual('[CODE]\nCode!\n[/CODE]');
  //   });
  // 
  //   it("converters markdown html code ``` to a BBCode tag", function() {
  //     expect(converter.code("``` html\nCode!\n```")).toEqual('[HTML]\nCode!\n[/HTML]');
  //   });
  // 
  //   it("converters markdown php code ``` to a BBCode tag", function() {
  //     expect(converter.code("``` php\nCode!\n```")).toEqual('[PHP]\nCode!\n[/PHP]');
  //   });
  // 
  //   it("converters markdown php code ``` to a BBCode tag", function() {
  //     expect(converter.code("```php\nCode!\n```")).toEqual('[PHP]\nCode!\n[/PHP]');
  //   });
  // 
  //   it("converters markdown random code ``` to a BBCode tag", function() {
  //     expect(converter.code("``` random\nCode!\n```")).toEqual('[CODE]\nCode!\n[/CODE]');
  //   });
  // 
  //   it("converters markdown 4 space indent to a BBCode tag, start with a new line", function() {
  //     expect(converter.code("\n    This is code!")).toEqual('\n[CODE]\nThis is code!\n[/CODE]');
  //   });
  // 
  //   it("converters markdown 4 space indent to a BBCode tag, start and end with a new line", function() {
  //     expect(converter.code("\n    This is code!\n")).toEqual('\n[CODE]\nThis is code!\n[/CODE]\n');
  //   });
  // });
  // 
  // describe("#strong", function() {
  //   it("converters markdown **** to a BBCode [B] tag", function() {
  //     expect(converter.strong("**I'm Strong!**")).toEqual("[B]I'm Strong![/B]");
  //   });
  //       
  //   it("handles multiply tags ", function() {
  //     expect(converter.strong("**I'm Strong!** and **So am I**")).toEqual("[B]I'm Strong![/B] and [B]So am I[/B]");
  //   });
  // });
  // 
  // describe("#italic", function() {
  //   it("converters markdown ** to a BBCode [I] tag", function() {
  //     expect(converter.italic("*I'm NOT Strong!*")).toEqual("[I]I'm NOT Strong![/I]");
  //   });
  //     
  //   it("converters markdown ** to a BBCode [I] tag, even if within another string", function() {
  //     expect(converter.italic("Content *I'm NOT Strong!* Content")).toEqual("Content [I]I'm NOT Strong![/I] Content");
  //   });
  //   
  //   it("handles multiply tags ", function() {
  //     expect(converter.italic("*I'm NOT Strong!* and *So am I*")).toEqual("[I]I'm NOT Strong![/I] and [I]So am I[/I]");
  //   });
  // 
  //   it("should not touch markdown's **** notation", function() {
  //     expect(converter.italic("**Strong!**")).not.toEqual("*[I]Strong![/I]*");
  //   });
  // });
  // 
  // describe("#underscore", function() {
  //   it("converters markdown _Text_ to a BBCode [U] tag", function() {
  //     expect(converter.underscore("_Underscore me_")).toEqual("[U]Underscore me[/U]");
  //   });
  // 
  //   it("converters markdown (double) __Text__ to a BBCode [U] tag", function() {
  //     expect(converter.underscore("__Underscore me__")).toEqual("[U]Underscore me[/U]");
  //   });
  // 
  //   it("should ignore uneven", function() {
  //     expect(converter.underscore("_Underscore me__")).toEqual("_Underscore me__");
  //   });
  //   
  //   it("handles multiply tags ", function() {
  //     expect(converter.underscore("_Underscore me_, _I'll_")).toEqual("[U]Underscore me[/U], [U]I'll[/U]");
  //   });
  //     
  //   it("converters markdown _Text_ to a BBCode [U] tag, even if within another string", function() {
  //     expect(converter.underscore("Content _Underscore me_ Content")).toEqual("Content [U]Underscore me[/U] Content");
  //   });  
  // });
  // 
  // describe("#unorderedList", function() {
  //   it("should be able to convert a markdown list to a BBCode list", function() {
  //     var lines = ["- Item 1", "- Item 2", "    This is"];
  //     expect(converter.unorderedList(lines).join("\n")).toEqual("[LIST]\n[*]Item 1\n[*]Item 2\n[/LIST]\n    This is");
  //   });
  // 
  //   it("should treat a new line as a new list", function() {
  //     var list = ["- List 1", "", "- List 2"];
  //     expect(converter.unorderedList(list).join("\n")).toEqual("[LIST]\n[*]List 1\n[/LIST]\n\n[LIST]\n[*]List 2\n[/LIST]");
  //   });
  // 
  //   it("should not touch ordered lists", function() {
  //     var list = ["1. Item", "2. Item"];
  //     expect(converter.unorderedList(list)).toEqual(list);
  //   });
  // });
  // 
  // describe("#unorderedList", function() {
  //   it("should be able to convert a markdown ordered list to a BBCode ordered list", function() {
  //     var lines = ["1. Item 1", "2. Item 2"];
  //     expect(converter.orderedList(lines).join("\n")).toEqual("[LIST=1]\n[*]Item 1\n[*]Item 2\n[/LIST]");
  //   });
  // 
  //   it("should treat a new line as a new list", function() {
  //     var list = ["1. List 1", "", "2. List 2"];
  //     expect(converter.orderedList(list).join("\n")).toEqual("[LIST=1]\n[*]List 1\n[/LIST]\n\n[LIST=1]\n[*]List 2\n[/LIST]");
  //   });
  // 
  //   it("should not touch unordered lists", function() {
  //     var list = ["- Item 1", "- Item 2"];
  //     expect(converter.orderedList(list)).toEqual(list);
  //   });
  // });
  
  describe("description", function() {
    it("description", function() {
      var data = converter.process($("#markdown").html());
      console.debug(data);
    });
  });

  // describe("a complete document", function() {
  //   it("should be able to convert it", function() {
  //     var markdown = $("#markdown").html();
  //     var bbcode = $("#bbcode").html();
  //     expect(converter.raw(markdown).toBBCode()).toEqual(bbcode);
  //   });
  // });
});