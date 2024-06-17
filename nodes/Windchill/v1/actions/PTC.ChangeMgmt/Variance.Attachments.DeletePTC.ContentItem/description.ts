import { INodeProperties } from "n8n-workflow";

export const VarianceAttachmentsDeletePtcContentItemDescription: INodeProperties[] = [
	{
		displayName: 'VarianceId',
		name: 'VarianceId-string(path)',
		description: 'Variance ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"DELETE /Variances('{VarianceId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ContentItemId',
		name: 'ContentItemId-string(path)',
		description: 'Content Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"DELETE /Variances('{VarianceId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
];
