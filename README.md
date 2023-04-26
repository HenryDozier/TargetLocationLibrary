# TargetLocationLibrary
The Target Location Library enables its user to acquire locational information about Target stores in the United States
#
#### This function takes a county in the US as a parameter and returns the Target stores in the county
##### Parameter: county {string} - a county in the US
##### Return: matches {list} - All the targets in the county
**`getTargetByCounty(county)`**
#

#### This function takes a city in the US as a parameter and returns the Target stores in the city
##### Parameter: city {string} - a city in the US
##### Return: matches {list} - All the targets in the city
**`getTargetByCity(city)`**
#

#### This function takes an address of a target in the US, and returns what state the adress is in
##### Parameter: address {string} - a Target address in the US
##### Return: matches {list} - The state the address is in
**`getStateByAddress(address)`**
#

#### This function takes a postal code and returns all the target addresses in that postal code
##### Parameter: postalCode {number} - a Postal Code in the US
##### Return: matches {list} - The addresses in the postal code
**`getTargetByZipcode(postalCode)`**
#

#### This function takes a state and returns the average longitude and latitude of the Targets
##### Parameter: avgState {string} - a state in the US
##### Return: matches {list} - The avg Latitude, and longitude
**`avgLocation(avgState)`**
