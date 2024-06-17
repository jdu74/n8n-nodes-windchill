import { INodeProperties } from "n8n-workflow";

export const PtcProdMgmtPartFunctionGetAllVariantSpecificationsDescription: INodeProperties[] = [
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"GET /Parts('{PartId}')/PTC.ProdMgmt.GetAllVariantSpecifications()",
				],
			},
		},
		required: true,
	},
];
