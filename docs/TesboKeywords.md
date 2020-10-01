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