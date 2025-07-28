Database
    inventory
        table
            categories
                id serial pk
                name text
                item foreign key items
            items
                id serial pk
                name text
                category foreign key categories