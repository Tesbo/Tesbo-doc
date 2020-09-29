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
		<th>Example</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td><code>click</code></td>
		<td class="width30">Step: click on @forgotpassword</td>
		<td class="width40"><div> Perform click action on the given Element.<br></br> e.g @forgotpassword</div>
        </td>
	</tr>
	<tr>
		<td class="width20" ><code>double click</code></td>
		<td class="width40">Step: double click on @clickHereLink</td>
		<td class="width40"><div> Perform double click action on the given Element.<br></br> e.g @clickHereLink</div>
        </td>
	</tr>
    <tr>
		<td><code>right click</code></td>
		<td class="width30">Step: right click on @ForgotPasswordk</td>
		<td class="width40"><div> Perform right click action on the given Element. e.g @ForgotPasswordk. <br></br>
        it will open the context menu</div>
        </td>
	</tr>
    <tr>
		<td><code>pause and click</code></td>
		<td class="width30">Step: pause and click on @BackButton</td>
		<td class="width40"><div> Tesbo will wait until element became clickable and then click on the given element</div>
        </td>
	</tr>
	<tr>
		<td><code>click and hold</code></td>
		<td class="width30">Step: click and hold on @textLink element</td>
		<td class="width40"><div> Tesbo will click on the given element  and continue to press on that element</div>
        </td>
	</tr>
	<tr>
		<td><code>scroll and click</code></td>
		<td class="width30">Step: scroll and click on @FindingBugsLink</td>
		<td class="width40"><div> Tesbo will scroll to the given element  and then click on the given element</div>
        </td>
	</tr>
	<tr>
		<td class="width10"><code>Click on first element from List</code></td>
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
		<th>Example</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="width10"><code>Click on first element from List</code></td>
		<td class="width30">Click on first element from List @NumberList</td>
		<td class="width40"><div> Tesbo will find all the elements and click on the first element from list</div>
        </td>
	</tr>
	<tr>
		<td class="width10"><code>Click on a Last element from the list</code></td>
		<td class="width30">Step: Click on last element from List @NumberList</td>
		<td class="width40"><div> Tesbo will find all the elements and click on the last element from list</div>
        </td>
	</tr>
	<tr>
		<td class="width10"><code>Click on an element whose text matches with the given string</code></td>
		<td class="width30">Step: click on "Red" from List @ColorList</td>
		<td class="width40"><div> Tesbo will find all the elements and get text of element and if element text is match with the given text, it will click on that element</div>
        </td>
	</tr>
	<tr>
		<td class="width10"><code>Click on element by index from list</code></td>
		<td class="width30">Step: click on from List @NumberList</td>
		<td class="width40"><div> Tesbo will create a element list array with given locators and then click on the given index. As this is array first element start from 0 index</div>
        </td>
	</tr>
    </tbody>
</table>