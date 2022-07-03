<?php
/**
 * @return array
 */
function getVacation()
{
    return [
        [
            "id" => 1,
            "location" => "La Fortuna",
            "number" => "01",
            "image" => "./images/la-fortuna.jpg",
            
        ],
        [
            "id" => 2,
            "location" => "Monteverde",
            "number" => "02",
            "image" => "./images/monteverde.jpg",
        ],
        [
            "id" => 3,
            "location" => "Santa Teresa",
            "number" => "03",
            "image" => "./images/santa-teresa.jpg",
        ],
        [
            "id" => 4,
            "location" => "Manuel Antonio",
            "number" => "04",
            "image" => "./images/manuel-antonio.jpg",
        ],
        [
            "id" => 5,
            "location" => "Uvita",
            "number" => "05",
            "image" => "./images/uvita.jpg",
        ],
        [
            "id" => 6,
            "location" => "Puerto Viejo",
            "number" => "06",
            "image" => "./images/puerto-viejo.jpg",
        ],
        [
            "id" => 7,
            "location" => "Drake bay",
            "number" => "07",
            "image" => "./images/drake-bay.jpg",
        ],
        [
            "id" => 8,
            "location" => "Bocas del toro - Panama",
            "number" => "08",
            "image" => "./images/bocas.jpg",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getVacationDetails($id)
{
    $tags = [
        1 => [
            "paragraph" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio velit maxime quam obcaecati, laboriosam officiis blanditiis. Dolor, illo commodi.",
            "tags" => ['cheese', 'oven']
        ],
        2 => [
            "paragraph" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio velit maxime quam obcaecati, laboriosam officiis blanditiis. Dolor, illo commodi.",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "paragraph" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio velit maxime quam obcaecati, laboriosam officiis blanditiis. Dolor, illo commodi.",
            "tags" => ['omnomnom']
        ],
        4 => [
            "paragraph" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio velit maxime quam obcaecati, laboriosam officiis blanditiis. Dolor, illo commodi.",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "paragraph" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio velit maxime quam obcaecati, laboriosam officiis blanditiis. Dolor, illo commodi.",
            "tags" => ['fish']
        ],
        6 => [
            "paragraph" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio velit maxime quam obcaecati, laboriosam officiis blanditiis. Dolor, illo commodi.",
            "tags" => ['fish']
        ],
        7 => [
            "paragraph" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio velit maxime quam obcaecati, laboriosam officiis blanditiis. Dolor, illo commodi.",
            "tags" => ['fish']
        ],
        8 => [
            "paragraph" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis distinctio velit maxime quam obcaecati, laboriosam officiis blanditiis. Dolor, illo commodi.",
            "tags" => ['fish']
        ]
    ];

    return $tags[$id];
}