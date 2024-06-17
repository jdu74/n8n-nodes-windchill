import { INodeProperties } from "n8n-workflow";

export const DepartmentDataResultedByObjectsGetChangeItemDescription: INodeProperties[] = [
	{
		displayName: 'DepartmentDataId',
		name: 'DepartmentDataId-string(path)',
		description: 'Department Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"GET /DepartmentDatas('{DepartmentDataId}')/ResultedByObjects('{ChangeItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ChangeItemId',
		name: 'ChangeItemId-string(path)',
		description: 'Change Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"GET /DepartmentDatas('{DepartmentDataId}')/ResultedByObjects('{ChangeItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"GET /DepartmentDatas('{DepartmentDataId}')/ResultedByObjects('{ChangeItemId}')",
				],
			},
		},
	},
];
