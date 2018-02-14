import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiFormFixed extends PolymerElement {
    static get observers(){
    
    
    }
	static get template() {
    return `
        <!--STYLES-->
			
<link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
<script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>

        <!--END-STYLES-->

        <!--TEMPLATE-->
			
<form class="mui-form">
  <legend>Title</legend>
    <div class="mui-textfield">
        <input type="text">
            <label>Input 1</label>
              </div>
                <div class="mui-textfield">
                    <input type="text">
                        <label>Input 2</label>
                          </div>
                            <div class="mui-textfield">
                                <textarea></textarea>
                                    <label>Textarea</label>
                                      </div>
                                        <button type="submit" class="mui-btn mui-btn--raised">Submit</button>
                                        </form>

        <!--END-TEMPLATE-->

        <!--SCRIPTS-->
        <!--END-SCRIPTS-->
	`
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("mui-form-fixed", MuiFormFixed)