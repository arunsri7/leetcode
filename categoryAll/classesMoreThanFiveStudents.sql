select
    class
from
(
        select
            class,
            count(distinct student) as number
        from
            courses
        group by
            class
    ) as result
where
    number >= 5