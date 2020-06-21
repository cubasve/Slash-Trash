# Slash Trash

## Description:

**Just like how we shouldn't pollute our global scope when coding, we shouldn't pollute our globe in real-life.**

Slash Trash is a user's tool to a low-waste lifestyle by tracking their product changes in the household.
It includes a search bar to find alternatives for everyday household items.
The application provides a way for a user to take actionable steps to go green.

### Background Info:
Plastic is ubiquitous in our society. It has many applications across multiple industries. Because of its widespread use, and often one-time use, it contributes to landfills.

Why should we avoid plastic?
1. Plastic is not biodegradable (never decomposes). Instead, it breaks down into microplastics that float in our oceans and waterways.
2. Recycled plastic is inferior to virgin plastic (newly-manufactured plastic). There is a finite amount of times recycled plastic can be recycled.

## Screenshots of Application:

![image](https://user-images.githubusercontent.com/62129720/85089614-13ef5080-b1b1-11ea-98b8-afaff12506ed.png)

![image](https://user-images.githubusercontent.com/62129720/85089585-033eda80-b1b1-11ea-915d-e4d98b53894c.png)

![image](https://user-images.githubusercontent.com/62129720/85089528-dab6e080-b1b0-11ea-97c5-b1577233c4e9.png)

## Technologies Used:

- MongoDB
- Express
- Node

## Getting Started:
https://slash-trash.herokuapp.com/

### Planning:
- **Entity Relationship Diagram (ERD):**
![image](https://user-images.githubusercontent.com/62129720/85229184-71a0ba00-b3b6-11ea-8f49-e0d766933118.png)

- **User Stories:**

| As a Visitor: | As an Authenticated User: |
| -----  | ------ |
| AAV, I want to search for eco-friendly household alternatives  | AAS, I want to add and delete alternatives on my personal list |

- **Wireframes List:**

| Search Alternatives Page: | User's Swaps List Page: |
| ------  | ------ |
| 1. Search for swaps  | 1. Able to see all chosen swaps |
| 2. Add selected swap to personal list| 2. Delete unwanted swaps |

## Next Steps: Planned Future Enhancements

- **Additional Items and Alternatives:**
  This application currently has 5 items and 13 alternatives. More data needs to be added.

- **Incorporate a problem-solution structure:**
  The problem is the current household item and the solution is the eco-friendly alternative. I only stated why the alternative is a better choice, but did not state the issue with the household item. The users may not know why they should use the alternative.

- **Include a page for beginners and a page for tips:**
  Users who are novices to this lifestyle might feel overwhelmed with all the information.
  A resource that includes beginner swaps (e.g. using a reusable water bottle or grocery bag) and tips to guide experienced and/or novice users on their journey would be beneficial.

- **Incorporate a feedback link:**
  Allows the user to input their opinions about the application. This allows for the continual improvement of the application and a better user experience.

- **No results found for a search:**
  There are many products in a household and it is difficult to compile them all into the application. By adding a feature where I can see what items are not returning results, I can add that particular item and its alternatives into the data for future users who want to search for that same item.

- **Incorporate a swaps dictionary:**
  Not all users will want to search for swaps using the search bar. Some will want a list of them in alphabetical order to look up. Adding a sorting functionality that filters them by household area (ex. bathroom, kitchen) would be great.

- **User can like/comment on their individual swaps:**
  Did it work for them? Is it better than the conventional household item? Is the user saving money because of the swap?
  With the original user's consent, their likes and comments on their alternatives can be visible on the search alternatives page. This will be a useful resource to other users interested in that particular alternative.

- **User can add their own swaps:**
Not every user will want to search for swaps. Users may want to manually add their own and that should be an available option for them to do. 

- **Seed my data to the local database rather than the production database (MongoAtlas)**
