Database
    inventory
        table
            categories
                id serial pk
                name text
            items
                id serial pk
                name text
                category foreign key categories