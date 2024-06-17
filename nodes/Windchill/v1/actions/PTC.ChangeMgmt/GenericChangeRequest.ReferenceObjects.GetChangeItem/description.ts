import { INodeProperties } from "n8n-workflow";

export const GenericChangeRequestReferenceObjectsGetChangeItemDescription: INodeProperties[] = [
	{
		displayName: 'GenericChangeRequestId',
		name: 'GenericChangeRequestId-string(path)',
		description: 'Generic Change Request ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceObjects('{ChangeItemId}')",
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
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceObjects('{ChangeItemId}')",
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
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceObjects('{ChangeItemId}')",
				],
			},
		},
	},
];
