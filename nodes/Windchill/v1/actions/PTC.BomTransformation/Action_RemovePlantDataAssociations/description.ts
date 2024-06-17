import { INodeProperties } from "n8n-workflow";

export const ActionRemovePlantDataAssociationsDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /RemovePlantDataAssociations',
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /RemovePlantDataAssociations',
				],
				jsonContentType: [
					'application/json',
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '* PartPlantDataAssociations',
				name: 'PartPlantDataAssociations',
				description: 'Part Plant Data Associations - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Part": {\n\t\t\t"ID": "string"\n\t\t},\n\t\t"Plants": [\n\t\t\t{\n\t\t\t\t"ID": "string"\n\t\t\t}\n\t\t]\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /RemovePlantDataAssociations',
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"PartPlantDataAssociations": [\n\t\t{\n\t\t\t"Part": {\n\t\t\t\t"ID": "string"\n\t\t\t},\n\t\t\t"Plants": [\n\t\t\t\t{\n\t\t\t\t\t"ID": "string"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /RemovePlantDataAssociations',
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},
];
