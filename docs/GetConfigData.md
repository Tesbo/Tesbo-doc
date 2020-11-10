---
id: GetConfigData
title: Configuration File Data
---


Sometime We need to run the Test based on the configuration that we have provided into the Config like browser, OS or Environment. Tesbo provide the API to get the config file data runtime by using GetUserConfiguration Class. you can utilize this into the custom steps code. 


<h4>Click :</h4> 
<table class="demo">
	<thead>
	<tr>
		<th>Function Name</th>
		<th>Usage</th>
		<th>DataType</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td> getEnvironment() </td>
		<td class="width30">Return the Current Environment Name on Which Test are running</td>
		<td class="width40">String
        </td>
	</tr>
	<tr>
		<td class="width20" > getBaseUrl( ) </td>
		<td class="width40">Get the base Url from the Config File</td>
		<td class="width40"><div> String</div>
        </td>
	</tr>
    <tr>
		<td class="width20" >getBrowsers( ) </td>
		<td class="width40">Return the Current Browser name on Which Test Are running</td>
		<td class="width40"><div> String</div>
        </td>
	</tr>
    </tbody>
</table>


