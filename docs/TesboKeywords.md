---
id: TesboKeyword
title: All Tesbo Keyword and Action

---



This page contains all the Tesbo Supported Keywords

<h4>Click :</h4> 
<table class="demo">
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td> click </td>
		<td class="width30">Step: click on @forgotpassword</td>
		<td class="width40"><div> Perform click action on the given Element.<br></br> e.g @forgotpassword</div>
        </td>
	</tr>
	<tr>
		<td class="width20" > double click </td>
		<td class="width40">Step: double click on @clickHereLink</td>
		<td class="width40"><div> Perform double click action on the given Element.<br></br> e.g @clickHereLink</div>
        </td>
	</tr>
    <tr>
		<td> right click </td>
		<td class="width30">Step: right click on @ForgotPasswordk</td>
		<td class="width40"><div> Perform right click action on the given Element. e.g @ForgotPasswordk. <br></br>
        it will open the context menu</div>
        </td>
	</tr>
    <tr>
		<td> pause and click </td>
		<td class="width30">Step: pause and click on @BackButton</td>
		<td class="width40"><div> Tesbo will wait until element became clickable and then click on the given element</div>
        </td>
	</tr>
	<tr>
		<td> click and hold </td>
		<td class="width30">Step: click and hold on @textLink element</td>
		<td class="width40"><div> Tesbo will click on the given element  and continue to press on that element</div>
        </td>
	</tr>
	<tr>
		<td> scroll and click </td>
		<td class="width30">Step: scroll and click on @FindingBugsLink</td>
		<td class="width40"><div> Tesbo will scroll to the given element  and then click on the given element</div>
        </td>
	</tr>
	<tr>
		<td class="width10"> Click on first element from List </td>
		<td class="width30">Click on first element from List @NumberList</td>
		<td class="width40"><div> Tesbo will find all the elements and click on the first element from list</div>
        </td>
	</tr>
    </tbody>
</table>

<h4>Click From List:</h4> 
<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="width10"> Click on first element from List </td>
		<td class="width30">Click on first element from List @NumberList</td>
		<td class="width40"><div> Tesbo will find all the elements and click on the first element from list</div>
        </td>
	</tr>
	<tr>
		<td class="width10"> Click on a Last element from the list </td>
		<td class="width30">Step: Click on last element from List @NumberList</td>
		<td class="width40"><div> Tesbo will find all the elements and click on the last element from list</div>
        </td>
	</tr>
	<tr>
		<td class="width10"> Click on an element whose text matches with the given string </td>
		<td class="width30">Step: click on "Red" from List @ColorList</td>
		<td class="width40"><div> Tesbo will find all the elements and get text of element and if element text is match with the given text, it will click on that element</div>
        </td>
	</tr>
	<tr>
		<td class="width10"> Click on element by index from list </td>
		<td class="width30">Step: click on from List @NumberList</td>
		<td class="width40"><div> Tesbo will create a element list array with given locators and then click on the given index. As this is array first element start from 0 index</div>
        </td>
	</tr>
    </tbody>
</table>



<h4>Enter & Clear</h4> 
<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="width10">Enter text</td>
		<td class="width30">Step: Enter 'admin@phptravels.com' in @Email_Box</td>
		<td class="width40"><div> Tesbo will find the element Email_Box and then enter the text 'admin@phptravels.com'</div>
        </td>
	</tr>
	<tr>
		<td class="width10">Clear  text</td>
		<td class="width30">Step: Clear @Email_Box textbox</td>
		<td class="width40"><div> Tesbo will find the element Email_Box and then clear the text of textbox if available</div>
        </td>
	</tr>
	<tr>
		<td class="width10">Clear and enter</td>
		<td class="width30">Step: Clear and enter 'Hello@test.com' in @Email_Box</td>
		<td class="width40"><div> Tesbo will clear the text first from Email_Box and then enter 'Hello@test.com'</div>
        </td>
	</tr>
    </tbody>
</table>


<h4>Navigation</h4> 
<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="width10">Navigate to back</td>
		<td class="width30">Step: Navigate to back</td>
		<td class="width40"><div> Tesbo will redirect to the previous page</div>
        </td>
	</tr>
	<tr>
		<td class="width10">Navigate to Forward</td>
		<td class="width30">Step: Navigate to forward</td>
		<td class="width40"><div> Tesbo will redirected on the Next Page</div> </td>
	</tr>
	<tr>
		<td class="width10">Refresh Page</td>
		<td class="width30">Step: refresh  page</td>
		<td class="width40"><div> Tesbo will refresh page</div>
        </td>
	</tr>
    </tbody>
</table>

<h4>Browser Window Action</h4> 
<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="width10">Close Current Browser Window</td>
		<td class="width30">Step: Close window</td>
		<td class="width40"><div> Close the current window</div>
        </td>
	</tr>
	<tr>
		<td class="width10">Minimize Browser Window</td>
		<td class="width30">Step: Window minimize</td>
		<td class="width40"><div> Tesbo will minimize the browser window</div> </td>
	</tr>
	<tr>
		<td class="width10">Maximize Browser Window</td>
		<td class="width30">Step: Window Maximize</td>
		<td class="width40"><div> Tesbo will maximise the browser window</div>
        </td>
	</tr>
	<tr>
		<td class="width10">Resize the Browser Window</td>
		<td class="width30">Step: Window Resize (width,height)</td>
		<td class="width40"><div> Tesbo will resize te browser Window</div>
        </td>
	</tr>
    </tbody>
</table>


<h4>Wait</h4> 
<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="width10">Wait Until Element is clickable</td>
		<td class="width30">Step: pause until @element is clickable</td>
		<td class="width40"><div> Tesbo Will wait untile element became clickable</div>
        </td>
	</tr>
	<tr>
		<td class="width10">Wait Until Element is disapper</td>
		<td class="width30">Step: Pause until @element is disappear</td>
		<td class="width40"><div> Tesbo will wait until given element is going to disappear</div> </td>
	</tr>
	<tr>
		<td class="width10">Wait Until Element is display</td>
		<td class="width30">Step: pause until @element is display</td>
		<td class="width40"><div> Tesbo will wait until given element is going to display</div>
        </td>
	</tr>
	<tr>
		<td class="width10">Wait for given second</td>
		<td class="width30">Step: Pause for 1 sec</td>
		<td class="width40"><div> Tesbo will wait for the given second</div>
        </td>
	</tr>
    </tbody>
    
    
</table>

<h4>Scroll</h4>
<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
            <td class="width10">bottom</td>
            <td class="width30">Step: Scroll to bottom</td>
            <td class="width40"><div>Scroll to bottom of the page</div>
            </td>
        </tr>
        <tr>
              <td class="width10">top</td>
              <td class="width30">Step: Scroll to Top</td>
              <td class="width40"><div>Scroll to top of the page</div>
              </td>
         </tr>
        <tr>
            <td class="width10">coordinate</td>
            <td class="width30">Step: Scroll to coordinate (X,Y)</td>
            <td class="width40"><div>Scroll to coordinate of the page e.g coordinate (50,500)</div>
            </td>
        </tr>
        <tr>
             <td class="width10">element</td>
             <td class="width30">Step: Scroll to @element</td>
             <td class="width40"><div>Scroll to given element e.g @AutomationTools</div>
             </td>
         </tr>
         <tr>
             <td class="width10">horizontal</td>
             <td class="width30">Step: Scroll to Horizontal</td>
             <td class="width40"><div>Scroll to horizontal on the page</div>
             </td>
         </tr>
    </tbody>   
</table>

<h4>Alert</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
            <td class="width10">accept</td>
            <td class="width30">Step: Switch to alert then accept</td>
            <td class="width40"><div> First, it will switch to Alert and Accept the condition</div>
            </td>
        </tr>
        <tr>
              <td class="width10">close</td>
              <td class="width30">Step: Switch to alert then close</td>
              <td class="width40"><div>First, it will switch to Alert and Close the Alert.</div>
              </td>
         </tr>
        <tr>
            <td class="width10">enter</td>
            <td class="width30">Step: Switch to alert then enter 'Testing Demo'</td>
            <td class="width40"><div>First, it will switch to Alert and then enter text in the textbox in the alert</div>
            </td>
        </tr>
        <tr>
             <td class="width10">verify text</td>
             <td class="width30">Step: Switch to alert then verify text with 'I am an alert box!'</td>
             <td class="width40"><div>First, it will switch to alert and then verify text on alert</div>
             </td>
         </tr>
    </tbody>   
</table>

 
<h4>iFrames</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
            <td class="width10">element</td>
            <td class="width30">Step: Switch to frame @SingleIframe</td>
            <td class="width40"><div>Switch to iFrame using element</div>
            </td>
        </tr>
        <tr>
              <td class="width10">id</td>
              <td class="width30">Step: Switch to frame using id 'singleframe'</td>
              <td class="width40"><div>Switch to iFrame using ID</div>
              </td>
         </tr>
        <tr>
            <td class="width10">name</td>
            <td class="width30">Step: Switch to frame using name 'singleframe'</td>
            <td class="width40"><div>Switch to iFrame using name</div>
            </td>
        </tr>
        <tr>
             <td class="width10">main</td>
             <td class="width30">Step: Switch to main frame</td>
             <td class="width40"><div>Switch to Main Frame</div>
             </td>
        </tr>
        <tr>
             <td class="width10">parent</td>
             <td class="width30">Step: Switch to parent frame</td>
             <td class="width40"><div>Switch to Parent Frame</div>
             </td>
        </tr>
    </tbody>   
</table>

<h4>Window</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
            <td class="width10">main</td>
            <td class="width30">Step: Switch to main window</td>
            <td class="width40"><div>Switch to main window</div>
            </td>
        </tr>
        <tr>
              <td class="width10">new</td>
              <td class="width30">Step: Switch to new window</td>
              <td class="width40"><div>Switch to new window</div>
              </td>
         </tr>
        <tr>
            <td class="width10">parent</td>
            <td class="width30">Step: Switch to parent window</td>
            <td class="width40"><div>Switch to parent window</div>
            </td>
        </tr>
    </tbody>   
</table>

<h4>Select From Dropdown</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
            <td class="width10">using text</td>
            <td class="width30">Step: Select using text 'Enter text you want to select' from @dropdownElement</td>
            <td class="width40"><div>Select given text from dropdown</div>
            </td>
        </tr>
        <tr>
              <td class="width10">using index</td>
              <td class="width30">Step: Select using index 1 from @dropdownElement</td>
              <td class="width40"><div>Select text from dropdown using index</div>
              </td>
         </tr>
        <tr>
            <td class="width10">using value</td>
            <td class="width30">Step: Select using value 'enter attribute value of element' from @dropdownElement</td>
            <td class="width40"><div>Select text using given attribute value of element</div>
            </td>
        </tr>
    </tbody>   
</table>

<h4>Deselect From Dropdown</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
            <td class="width10">all</td>
            <td class="width30">Step: Deselect all from @MultiSelectDropdownElement</td>
            <td class="width40"><div>Deselect all value from dropdown</div>
            </td>
        </tr>
        <tr>
              <td class="width10">using text</td>
              <td class="width30">Step: Deselect using text 'Enter text you want to deselect' from @multiSelectDropdownElement</td>
              <td class="width40"><div>Deselect given text from multi select dropdown</div>
              </td>
         </tr>
        <tr>
            <td class="width10">using value</td>
            <td class="width30">Step: Deselect using value 'enter attribute value of element' from @multiSelectDropdownElement</td>
            <td class="width40"><div>Deselect text using given attribute value from multi select dropdown</div>
            </td>
        </tr>
        <tr>
            <td class="width10">using index</td>
            <td class="width30">Step: Deselect using index 1 from @multiSelectDropdownElement</td>
            <td class="width40"><div>Deselect text from multi select dropdown using index</div>
            </td>
        </tr>
    </tbody>   
</table>


<h4>Cookies and Cache</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
            <td class="width10">clear cache</td>
            <td class="width30">Step: Clear Cache</td>
            <td class="width40"><div>To clear browser cache data</div>
            </td>
        </tr>
        <tr>
              <td class="width10">clear cookies</td>
              <td class="width30">Step: clear cookies</td>
              <td class="width40"><div>To clear browser cookies from System</div>
              </td>
         </tr>
    </tbody>   
</table>

<h4>Print</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
            <td class="width10">print element text</td>
            <td class="width30">Step: Print @element</td>
            <td class="width40"><div>To Print element text</div>
            </td>
        </tr>
        <tr>
              <td class="width10">print text</td>
              <td class="width30">Step: Print "enter text you want to print"</td>
              <td class="width40"><div>Print or comment text</div>
              </td>
         </tr>
         <tr>
               <td class="width10">print text</td>
               <td class="width30">reporter.printStep("Any String");</td>
               <td class="width40"><div>Print Steps in report from custom step</div>
               </td>
          </tr>
    </tbody>   
</table>

<h4>Screenshot</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
            <td class="width10">screenshot</td>
            <td class="width30">Step: Capture screenshot</td>
            <td class="width40"><div>To Capture page screenshot</div>
            </td>
        </tr>
        <tr>
              <td class="width10">element screenshot</td>
              <td class="width30">Step: capture screenshot of @element</td>
              <td class="width40"><div>Capture screenshot of particular element</div>
              </td>
         </tr>
    </tbody>   
</table>

<h4>Assert Attribute</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
                <td class="width10">attribute value equal to</td>
                <td class="width30">Verify: Get attribute 'attribute name' of @element is equal to 'attribute value'</td>
                <td class="width40"><div>Assert element attribute value is not equal to given text</div>
                </td>
        </tr>
        <tr>
              <td class="width10">attribute value not equal to</td>
              <td class="width30">Verify: Get attribute 'attribute name' of @element is not equal to 'attribute value'</td>
              <td class="width40"><div>Assert element attribute value is not equal to given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">attribute value equal to ignore case</td>
              <td class="width30">Verify: Get attribute 'attribute name' of @element is equal to ignore case 'attribute value'</td>
              <td class="width40"><div>Assert element attribute value is equal to ignore case of given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">attribute value same as given text</td>
              <td class="width30">Verify: Get attribute 'attribute name' of @element contains is 'attribute value'</td>
              <td class="width40"><div>Assert element attribute text contains is same as given text</div>
              </td>
        </tr>      
    </tbody>   
</table>

<h4>Assert CSS Value</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
              <td class="width10">CSS value equal to</td>
              <td class="width30">Verify: Get css value 'css name' of @element is equal to 'css value'</td>
              <td class="width40"><div>Assert element  CSS value is equal to given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">CSS value not equal to</td>
              <td class="width30">Verify: Get css value 'css name' of @element is not equal to 'css value'</td>
              <td class="width40"><div>Assert element CSS value is not equal to given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">CSS value not equal to ignore case</td>
              <td class="width30">Verify: Get css value 'css name' of @element is equal to ignore case 'css value'</td>
              <td class="width40"><div>Assert element CSS value is equal to ignore case of given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">CSS value contains</td>
              <td class="width30">Verify: Get css value 'css name' of @element contains is 'css value'</td>
              <td class="width40"><div>Assert element CSS text contains is same as given text</div>
              </td>
        </tr>     
    </tbody>   
</table>

<h4>Assert multiple element</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
              <td class="width10">multiple element with AND condition</td>
              <td class="width30">Verify: @element text is not equal to 'verify text' And @element text is equal to 'verify text'</td>
              <td class="width40"><div>Assert multiple element with AND condition</div>
              </td>
        </tr>
        <tr>
              <td class="width10">multiple element with OR condition</td>
              <td class="width30">Verify: @element text is not equal to 'verify text' OR @element text is equal to 'verify text'</td>
              <td class="width40"><div>Assert multiple element with OR condition</div>
              </td>
        </tr>
        <tr>
              <td class="width10">multiple element is displayed</td>
              <td class="width30">Verify: @element @element @element is displayed</td>
              <td class="width40"><div>Assert that multiple element is displayed or not</div>
              </td>
        </tr>         
    </tbody>   
</table>

<h4>Assert</h4>

<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
              <td class="width10">current url contains</td>
              <td class="width30">Verify: current url is contains 'url contain'</td>
              <td class="width40"><div>Current URL contains is available in given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">Current url equal to</td>
              <td class="width30">Verify: Current url is equal to 'URL'</td>
              <td class="width40"><div>Current URL is equal to same as given URL</div>
              </td>
        </tr>
        <tr>
              <td class="width10">number of elements</td>
              <td class="width30">Verify: @element has size of 'number of element'</td>
              <td class="width40"><div>Element has given number of elements</div>
              </td>
        </tr>
        <tr>
              <td class="width10">element displayed</td>
              <td class="width30">Verify: @element is displayed</td>
              <td class="width40"><div>Element is displayed or not</div>
              </td>
        </tr>     
        <tr>
              <td class="width10">element present</td>
              <td class="width30">Verify: @element is present</td>
              <td class="width40"><div>Element is present or not</div>
              </td>
        </tr>
        <tr>
              <td class="width10">element visible</td>
              <td class="width30">Verify: @element is visible</td>
              <td class="width40"><div>Element is visible or not</div>
              </td>
        </tr> 
        <tr>
              <td class="width10">element contains is ignore case</td>
              <td class="width30">Verify: @element text contains is ignore case of 'verify text'</td>
              <td class="width40"><div>Element text contains is ignore case of given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">element contains</td>
              <td class="width30">Verify: @element text contains is 'verify text'</td>
              <td class="width40"><div>Element text contains is same as given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">element text end with</td>
              <td class="width30">Verify: @element text is end with 'verify text'</td>
              <td class="width40"><div>Element text is end with same as given text</div>
              </td>
        </tr> 
        <tr>
              <td class="width10">element text equal</td>
              <td class="width30">Verify: @element text is equal to 'verify text'</td>
              <td class="width40"><div>Element text is equal to given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">equal to ignore case</td>
              <td class="width30">Verify: @element text is equal to ignore case 'verify text'</td>
              <td class="width40"><div>Element text is equal to ignore case of given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">not equal</td>
              <td class="width30">Verify: @element text is not equal to 'verify text'</td>
              <td class="width40"><div>Element text is not equal to given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">element text start with</td>
              <td class="width30">Verify: @element text is start with 'verify text'</td>
              <td class="width40"><div>Element text is start with same as given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">element text is alphanumeric</td>
              <td class="width30">Verify: @element text should be alphanumeric</td>
              <td class="width40"><div>Element text should be alphanumeric</div>
              </td>
        </tr>
        <tr>
              <td class="width10">element text is number</td>
              <td class="width30">Verify: @element text should be number</td>
              <td class="width40"><div>Element text should be number</div>
              </td>
        </tr>
        <tr>
              <td class="width10">get cookies and check</td>
              <td class="width30">Verify: Get cookies and check 'cookie name' is available</td>
              <td class="width40"><div>Get cookies and check particular cookie is available or not</div>
              </td>
        </tr>
        <tr>
              <td class="width10">page title with ignore case</td>
              <td class="width30">Verify: Page Title is equal to ignore case 'verify text'</td>
              <td class="width40"><div>Page title is equal to ignore case of given text</div>
              </td>
        </tr>
        <tr>
              <td class="width10">page title with same case</td>
              <td class="width30">Verify: Page Title is equal to 'verify text'</td>
              <td class="width40"><div>Page Title is equal to same as given text</div>
              </td>
        </tr>     
    </tbody>   
</table>

<h4>Keyboard & Mouse Action</h4>
<table>
	<thead>
	<tr>
		<th>Action</th>
		<th>Keyword</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
        <tr>
              <td class="width10">mouse hover on element</td>
              <td class="width30">Step: Mouse hover @element</td>
              <td class="width40"><div>Mouse hover on given element</div>
              </td>
        </tr>
        <tr>
              <td class="width10">press key from keyboard</td>
              <td class="width30">Step: Press 'CTRL' Plus 'key' in @Email_Box</td>
              <td class="width40"><div>Press CTRL + A, CTRL + C and CTRL + V from keyboard</div>
              </td>
        </tr>
        <tr>
              <td class="width10">press enter key</td>
              <td class="width30">Step: Press enter key</td>
              <td class="width40"><div>Press enter key from keyboard</div>
              </td>
        </tr>
        <tr>
              <td class="width10">press enter key on element</td>
              <td class="width30">Step: Press enter key on @element</td>
              <td class="width40"><div>Press enter key from keyboard on given element</div>
              </td>
        </tr>
        <tr>
              <td class="width10">press tab key</td>
              <td class="width30">Step: Press tab key</td>
              <td class="width40"><div>Press tab key from keyboard</div>
              </td>
        </tr>        
    </tbody>   
</table>
 