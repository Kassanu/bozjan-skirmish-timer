<template>
    <div>
        <SkirmishList :list="skirmishes" />
    </div>
</template>

<script>
    import SkirmishList from './SkirmishList.vue'

    export default {
        name: 'Main',
        components: {
            SkirmishList
        },
        data() {
            return {
                skirmishes: [
                    [
                        {
                            id: "074e37ef-e316-4e13-9d54-e2560248ef9b",
                            name: "All Pets Are Off"
                        },
                        {
                            id: "fd2fe868-83f6-4c3e-9743-896e2a9a4341",
                            name: "The Beasts Must Die"
                        },
                        {
                            id: "14f52f3b-d12d-4f74-a7d4-61d1210374e4",
                            name: "Sneak & Spell"
                        },
                        {
                            id: "a7e77b5d-14a5-4686-8b47-180c4695b2b5",
                            name: "None of Them Knew They Were Robots"
                        },
                        {
                            id: "b63e850f-10aa-43e1-98c6-2942bf28a2a5",
                            name: "Unrest for the Wicked"
                        },
                        {
                            id: "f0f5531d-999f-43f7-9171-21e9b1ba93ed",
                            name: "Seeq and Destroy"
                        },
                        {
                            id: "2ab18753-a433-4649-9f9a-1cc73eac4334",
                            name: "Brought to Heal"
                        },
                        {
                            id: "701da551-51b4-4447-9be1-1990af101774",
                            name: "More Machine Now than Man"
                        },
                        {
                            id: "69d572b8-1682-4141-8623-3bbb48737efd",
                            name: "Can Carnivorous Plants Bloom Even on a Battlefield?"
                        },
                        {
                            id: "debeb8cc-64d7-4475-b1d3-b6bf9300f0fb",
                            name: "Conflicting with the First Law"
                        },
                    ],
                    [
                        {
                            id: "f3bbdfa4-432b-4542-9ba6-7e660ec06183",
                            name: "Scavengers of Human Sorrow"
                        },
                        {
                            id: "25338bf2-c4ce-4a5f-8593-4a80f9f39eaf",
                            name: "Parts and Recreation"
                        },
                        {
                            id: "8c15c907-a432-4447-a8f4-1eb6274b2960",
                            name: "Heavy Boots of Lead"
                        },
                        {
                            id: "3ffb302e-77e1-44f3-97f8-0ba3b03743d5",
                            name: "The Monster Mash"
                        },
                        {
                            id: "0f03feb4-71fd-4718-b4d7-5883e9208d6a",
                            name: "Unicorn Flakes"
                        },
                        {
                            id: "6c693117-ce3e-4a5f-89be-6aef2ec2ee0d",
                            name: "Help Wanted"
                        },
                        {
                            id: "a6bda95c-ef76-432b-8a64-496c0250904a",
                            name: "Pyromancer Supreme"
                        },
                        {
                            id: "e94f8624-5302-47d9-b40a-3593f99aff66",
                            name: "Red (Chocobo) Alert"
                        },
                        {
                            id: "21c0d479-f797-4702-81cc-b96b64ff8f05",
                            name: "The Element of Supplies"
                        },
                        {
                            id: "cfaafc3d-975b-488b-9f34-f0043940c9ca",
                            name: "No Camping Allowed"
                        },
                    ],
                    [
                        {
                            id: "0ffd6063-0564-479e-9bc8-efbac36a91c4",
                            name: "Demonstrably Demonic"
                        },
                        {
                            id: "9bcfff0f-fee3-49ac-8bf4-da5eddac3282",
                            name: "The War Against the Machines"
                        },
                        {
                            id: "dc60dbe9-3eee-48f9-a0fc-9a8ec21f750b",
                            name: "My Family and Other Animals"
                        },
                        {
                            id: "fbb8a392-d682-4be2-9156-41d127c4ae3f",
                            name: "Murder Death Kill"
                        },
                        {
                            id: "6bc0c8c7-03e6-465c-bbe2-a8c8f59d355d",
                            name: "Let Slip the Dogs of War"
                        },
                        {
                            id: "ee6c16cd-a25d-488a-8fab-a852387f0544",
                            name: "The Wild Bunch"
                        },
                        {
                            id: "f7b1a764-915e-4a60-8737-a8711355ced4",
                            name: "Supplies Party"
                        },
                        {
                            id: "f45e0dd1-3942-4f9a-9b11-4460baf37571",
                            name: "For Absent Friends"
                        },
                        {
                            id: "83f30088-e0e1-409f-a69a-df20cbfac568",
                            name: "Of Steel and Flame"
                        },
                        {
                            id: "a8d79769-58d9-47da-be03-71d968875128",
                            name: "I'm a Mechanical Man"
                        },
                        {
                            id: "a6cf5c96-9663-434d-a861-d5ab31c4c6e8",
                            name: "Desperately Seeking Something"
                        },
                        {
                            id: "9da142fa-f48b-471b-a9cc-70332340099c",
                            name: "Wate the Rainbow"
                        }
                    ]
                ]
            }
        }
    }
</script>